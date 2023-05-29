from rest_framework import serializers
from .models import *
from users.serializers import UserSerializer
from datetime import timedelta, datetime
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
import jwt
from testsite.settings import SECRET_KEY


# class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
#     @classmethod
#     def get_token(cls, user):
#         dt = datetime.now() + timedelta(hours=1)
#
#         token = jwt.encode({
#             'id': user.id,
#             'exp_time': int(dt.timestamp())
#         }, SECRET_KEY, algorithm='HS256')
#
#         return token.decode('utf-8')
        # token = super().get_token(user)
        # dt = datetime.now()+timedelta(minutes=60)
        # # Добавляем кастомные данные в токен
        # token['id'] = user.id
        # huy = int(dt.strftime('%s'))
        # print(huy)
        # token['exp_time'] = dt.strftime('%s')
        #
        # token['email'] = user.email
        #
        # return token

class GraphicsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Graphics
        fields = "__all__"

class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = "__all__"

class HomeworkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Homework
        fields = "__all__"
class ClassesSerializer(serializers.ModelSerializer):
    # students = UserSerializer(many=True, read_only=True)
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    class Meta:
        model = Classes
        fields = "__all__"
# class UsersSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Users
#         fields = "__all__"
