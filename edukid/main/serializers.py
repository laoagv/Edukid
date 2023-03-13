from rest_framework import serializers
from .models import Graphics, Users

class GraphicsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Graphics
        fields = "__all__"

class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = "__all__"
