from django.contrib import admin
from .models import *
# Register your models here.
from users.models import User
from users.admin import UserInLine
from django.contrib import admin

# class ClassesInLine(admin.TabularInline):
#     model = User.classess.through

class ClassesAdmin(admin.ModelAdmin):
    inlines = [UserInLine]
admin.site.register(Graphics)
admin.site.register(Classes, ClassesAdmin)
admin.site.register(Homework)
admin.site.register(Subject)
admin.site.register(Answer)
# from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.forms import UserCreationForm
# from django.contrib.auth.models import User
from django.utils.translation import gettext, gettext_lazy as _

# from .models import UserProfile







##################################
# class UserInline(admin.StackedInline):
#     model = UserProfile
#     can_delete = False
#     verbose_name_plural = 'Доп. информация'
#
#
# # Определяем новый класс настроек для модели User
# class CustomUserCreationForm(UserCreationForm):
#
#     class Meta:
#         model = UserCreationForm.Meta.model
#         fields = '__all__'
#         field_classes = UserCreationForm.Meta.field_classes

#
# class UserAdmin(UserAdmin):
#     add_form = CustomUserCreationForm
#     add_fieldsets = (
#         (None, {'fields': ('username', 'password1', 'password2')}),
#         (_('Personal info'), {'fields': ('first_name', 'role','email')}),
#         (_('Permissions'), {
#             'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions'),
#         }),
#         (_('Important dates'), {'fields': ('last_login', 'date_joined')}),
#         (('ExtInformation'), {'fields' : ('last_name', 'father_name')})
#     )
#     inlines = (UserInline,)
#
#
# # Перерегистрируем модель User
# admin.site.unregister(User)
# admin.site.register(User, UserAdmin)

# @admin.register(User)
# class UserAdmin(BaseUserAdmin):
#     add_form = CustomUserCreationForm
#     add_fieldsets = (
#         (None, {'fields': ('username', 'password1', 'password2')}),
#         (_('Personal info'), {'fields': ('first_name', 'last_name', 'father_name', 'role','email')}),
#         (_('Permissions'), {
#             'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions'),
#         }),
#         (_('Important dates'), {'fields': ('last_login', 'date_joined')}),
#     )
