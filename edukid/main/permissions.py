from rest_framework import permissions
from .models import Classes
import json
class IsTeacher(permissions.BasePermission):
    def has_permission(self, request, view):
        if  request.user.type_of_user=="teacher":

            return True
        return False
class IsTeacherOwner(permissions.BasePermission):
    def has_permission(self, request, view):
        data = request.body.decode('utf-8')
        json_data = json.loads(data)
        class_id = json_data.class_id
        if request.user == Classes.objects.get(id=class_id).teacher:
            return True
        return False