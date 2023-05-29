from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from .admin import UserCreationForm
from django.views.generic import CreateView
from django.contrib.auth.views import LoginView
from django.contrib.auth.forms import AuthenticationForm
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from rest_framework.decorators import api_view, permission_classes


from django.contrib.auth import logout
# Create your views here.
# @api_view(['POST'])
# @permission_classes([AllowAny])
# def issue_token(request: Request):
#     serializer = IssueTokenRequestSerializer(data=request.data)
#     if serializer.is_valid():
#         authenticated_user = authenticate(**serializer.validated_data)
#         try:
#             token = Token.objects.get(user=authenticated_user)
#         except Token.DoesNotExist:
#             token = Token.objects.create(user=authenticated_user)
#         return Response(TokenSeriazliser(token).data)
#     else:
#         return Response(serializer.errors, status=400)

@api_view(['POST'])
@permission_classes([AllowAny, ])
def authenticate_user(request):
    try:
        email = request.data['email']
        password = request.data['password']
        user = User.objects.get(email=email, password=password)
        if user:
            try:
                payload = jwt_payload_handler(user)
                token = jwt.encode(payload, settings.SECRET_KEY)
                user_details = {}
                user_details['name'] = "%s %s" % (
                    user.name, user.surname)
                user_details['token'] = token
                user_logged_in.send(sender=user.__class__,
                                    request=request, user=user)
                return Response(user_details, status=status.HTTP_200_OK)
            except Exception as e:
                raise e
        else:
            res = {
                'error': 'can not authenticate with the given credentials or the account has been deactivated'}
            return Response(res, status=status.HTTP_403_FORBIDDEN)
    except KeyError:
        res = {'error': 'please provide a email and a password'}
        return Response(res)

class RegisterUser(CreateView):
    form_class=UserCreationForm
    success_url = reverse_lazy('login')
    template_name = 'sign/sign-in.html'

class LoginUser(LoginView):
    form_class = AuthenticationForm
    template_name = "sign-up.html"
    # def get_success_url(self):
    #     return reverse_lazy('home', current_app="main")
def logout_user(request):
    logout(request)
    return redirect('login')