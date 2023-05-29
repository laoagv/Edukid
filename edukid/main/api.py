from .models import Graphics, Classes
from rest_framework import generics, viewsets, permissions, mixins
from .serializers import *
from .permissions import IsTeacher
from django.http import HttpResponse


# class IsTeacher(permissions.BasePermission):
#     def has_permission(self, request, view):
#         if  request.user.type_of_user=="teacher":
#
#             return True
#         return False



class GraphicsViewSet(viewsets.ModelViewSet):
    queryset = Graphics.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = GraphicsSerializer

class ClassesAPIList(generics.ListAPIView):
    def get_queryset(self):
        """
        This view should return a list of all the purchases
        for the currently authenticated user.
        """
        user = self.request.user
        return Classes.objects.filter(teacher=user)
    serializer_class = ClassesSerializer
    permission_classes = (permissions.IsAuthenticated, IsTeacher)

class ClassesAPIUpdate(generics.ListCreateAPIView):
    queryset = Classes.objects.all()
    serializer_class = ClassesSerializer
    permission_classes = (permissions.IsAuthenticated, IsTeacher)
class ClassesAPIDestroy(generics.ListCreateAPIView):
    queryset = Classes.objects.all()
    serializer_class = ClassesSerializer
    permission_classes = (permissions.IsAuthenticated, IsTeacher)


class SubjectAPIList(generics.ListAPIView):
    def get_queryset(self):
        """
        This view should return a list of all the purchases
        for the currently authenticated user.
        """
        user = self.request.user
        need_class = self.request.data['classes']
        classes = user.classes_set.all()
        res = Subject.objects.none()
        for i in classes:
            print(classes, i.id)
            print(Subject.objects.filter(class_id = i))
            res = res.union(Subject.objects.filter(class_id = i))
        return res
        # return Subject.objects.filter(class_id = need_class )
    serializer_class = SubjectSerializer
    permission_classes = (permissions.IsAuthenticated, IsTeacher)

class SubjectAPIUpdate(generics.ListCreateAPIView):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer
    permission_classes = (permissions.IsAuthenticated, IsTeacher)
class SubjectAPIDestroy(generics.ListCreateAPIView):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer
    permission_classes = (permissions.IsAuthenticated, IsTeacher)
# class ClassesViewSet(viewsets.ModelViewSet):
#     queryset = Classes.objects.all()
#     permissions_classes = [
#         permissions.AllowAny
#     ]
#     serializer_class = ClassesSerializer
# class UsersViewSet(viewsets.ModelViewSet):
#     queryset = Users.objects.all()
#     permissions_classes = [
#         permissions.AllowAny
#     ]
#     serializer_class = UsersSerializer