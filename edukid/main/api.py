from .models import Graphics, Users
from rest_framework import viewsets, permissions
from .serializers import GraphicsSerializer, UsersSerializer

class GraphicsViewSet(viewsets.ModelViewSet):
    queryset = Graphics.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = GraphicsSerializer
class UsersViewSet(viewsets.ModelViewSet):
    queryset = Users.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = UsersSerializer