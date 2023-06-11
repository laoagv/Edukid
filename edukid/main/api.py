from .models import Graphics, Classes
from rest_framework import generics, viewsets, permissions, mixins
from .serializers import *
from .permissions import IsTeacher, IsTeacherOwner
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework import status
import json



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
        if user.type_of_user!="teacher":
            return Classes.objects.filter(students__id = user.id)
        return Classes.objects.filter(teacher=user)
    serializer_class = ClassesSerializer
    # permission_classes = (permissions.IsAuthenticated, IsTeacher)

class ClassesAPICreate(generics.ListCreateAPIView):
    queryset = Classes.objects.all()
    serializer_class = ClassesSerializer
    permission_classes = (permissions.IsAuthenticated, IsTeacher)

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data, context={'teacher':request.user})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ClassesAPIUpdate(generics.UpdateAPIView):
    queryset = Classes.objects.all()

    serializer_class = ClassesSerializer
    def patch(self, request, *args, **kwargs):
        pk = kwargs.get("pk", None)
        instance=Classes.objects.get(pk=pk)
        student_id = request.data.pop("student_id")
        serializer = self.serializer_class(data=request.data, instance=instance, partial=True, context={"student_id":student_id})
        if serializer.is_valid():
            # serializer.validate()
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    # permission_classes = (permissions.IsAuthenticated, IsTeacher, IsTeacherOwner)

class ClassesAPIDestroy(generics.ListCreateAPIView):
    queryset = Classes.objects.all()
    serializer_class = ClassesSerializer
    permission_classes = (permissions.IsAuthenticated, IsTeacher)


class SubjectAPIList(generics.ListAPIView):
    serializer_class = SubjectSerializer
    queryset = Subject.objects.all()

    # def get_queryset(self):
    #     """
    #     This view should return a list of all the purchases
    #     for the currently authenticated user.
    #     """
    #     user = self.request.user
    #     # need_class = self.request.data['classes']
    #     classes = user.classes_set.all()
    #     # classes = Classes.objects.filter(teacher=user)
    #     res = Subject.objects.none()
    #     for i in classes:
    #         res = res.union(i.subject_set.all())
    #         # res = res.union(Subject.objects.filter(class_id = i.id))
    #
    #     return res
        # return Subject.objects.filter(class_id = need_class )
    # permission_classes = (permissions.IsAuthenticated)
class SubjectAPICreate(generics.ListCreateAPIView):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer
    # permission_classes = (permissions.IsAuthenticated, IsTeacher, IsTeacherOwner)
    def post(self, request, *args, **kwargs):
        class_id = request.data.pop('class_id')
        serializer = self.serializer_class(data=request.data, context={"class_id":class_id})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SubjectAPIUpdate(generics.ListCreateAPIView):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer
    permission_classes = (permissions.IsAuthenticated, IsTeacher)
class SubjectAPIDestroy(generics.ListCreateAPIView):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer
    permission_classes = (permissions.IsAuthenticated, IsTeacher)

class HomeworkAPIList(generics.ListAPIView):
    def get_queryset(self):
        """
        This view should return a list of all the purchases
        for the currently authenticated user.
        """
        user = self.request.user
        # need_class = self.request.data['classes']
        # classes = user.classes_set.all()
        # if classes == Classes.objects.none():
        classes = Classes.objects.filter(students__id = user.id)
        # classes = user.classes_students.all()
        if user.type_of_user == "teacher":
            classes = user.classes_set.all()
            print(classes)
        # classeskostil = Classes.objects.all()
        # classes = Classes.objects.none()
        # for classs in classeskostil:
        #     if user in classs.students:
        #         classes = Classes.union(classs)
        # classes = Classes.objects.filter(teacher=user)
        subjects = Subject.objects.none()
        for i in classes:
            subjects = subjects.union(i.subject_set.all())
        print(subjects)
            # res = res.union(Subject.objects.filter(class_id = i.id))
        res = Homework.objects.none()
        for j in subjects:
            res = res.union(j.homework_set.all())
        print(res)
        return res
    serializer_class = HomeworkSerializer
    # permission_classes = (permissions.IsAuthenticated)

class HomeworkAPICreate(generics.ListCreateAPIView):
    queryset = Homework.objects.all()
    serializer_class = HomeworkSerializer
    # permission_classes = (permissions.IsAuthenticated, IsTeacher)
    def post(self, request, *args, **kwargs):
        # subject_id = subject, **
        class_id = request.data.pop('subject_id')

        serializer = self.serializer_class(data=request.data, context = {"subject_id": class_id})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class HomeworkAPIUpdate(generics.ListCreateAPIView):
    queryset = Homework.objects.all()
    serializer_class = HomeworkSerializer
    permission_classes = (permissions.IsAuthenticated, IsTeacher)

class HomeworkAPIDestroy(generics.ListCreateAPIView):
    queryset = Homework.objects.all()
    serializer_class = HomeworkSerializer
    permission_classes = (permissions.IsAuthenticated, IsTeacher)

class AnswerAPIList(generics.ListAPIView):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer
    permission_classes = (permissions.IsAuthenticated, IsTeacher)

class AnswerAPICreate(generics.ListAPIView):
    queryset = Answer.objects.all()
    serializer_class =AnswerSerializer
    def post(self, request, *args, **kwargs):
        # subject_id = subject, **
        homework = request.data.pop('homework')

        serializer = self.serializer_class(data=request.data, context = {"homework": homework, "student":request.user})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    # permission_classes = (permissions.IsAuthenticated, IsTeacher)

class AnswerAPIUpdate(generics.ListAPIView):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer
    permission_classes = (permissions.IsAuthenticated, IsTeacher)

class AnswerAPIDestroy(generics.ListAPIView):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer
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