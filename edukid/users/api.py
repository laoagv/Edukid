from .models import User
from rest_framework import viewsets, permissions, generics
from .serializers import UserSerializer
from rest_framework.response import Response
from rest_framework import status


class UserViewSet(viewsets.ModelViewSet):
    # def create(self, request, *args, **kwargs):
    #     print(request.data, "хуй")
    #     serializer = self.get_serializer(data=request.data)
    #     if serializer.is_valid():
    #         user = serializer.save()
    #         return Response({'id': user.id}, status=status.HTTP_201_CREATED)
    #     else:
    #         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get_queryset(self):
        """
        This view should return a list of all the purchases
        for the currently authenticated user.
        """
        print(self.request)
        user = self.request.user
        filterset_fields = ["name", "surname", "father_name", "phone", "school", "gender", "date_of_birth", "picture", "type_of_user", "email", ]
        return User.objects.filter(id=user.id)


    permissions_classes = (
        permissions.IsAuthenticated,
    )
    serializer_class = UserSerializer
