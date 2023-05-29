from rest_framework import serializers
from .models import User
from rest_framework.serializers import Serializer, ModelSerializer, CharField, EmailField
from rest_framework.authtoken.models import Token


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields = ["id","name", "surname", "father_name", "phone", "school", "gender", "date_of_birth", "picture", "type_of_user", "email", "classess"]
        password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
            instance.save()
        return instance
        # fields=["name", "surname", "father_name", "phone", "school", "gender", "date_of_birth", "picture", "type_of_user", "email", "password"]

# class IssueTokenRequestSerializer(Serializer):
#     model = User
#
#     email = EmailField(required=True)
#     password = CharField(required=True)
#
#
# class TokenSeriazliser(ModelSerializer):
#
#     class Meta:
#         model = Token
#         fields = ['key']