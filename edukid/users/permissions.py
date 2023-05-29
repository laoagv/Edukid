from rest_framework import permissions

class IsTeacherOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        if  request.user.is_admin:
            return True
        return False

