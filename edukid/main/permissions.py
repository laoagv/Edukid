from rest_framework import permissions

class IsTeacher(permissions.BasePermission):
    def has_permission(self, request, view):
        if  request.user.type_of_user=="teacher":

            return True
        return False