from rest_framework import serializers
from .models import *
from users.serializers import UserSerializer
from users.models import User
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




class ClassesSerializer(serializers.ModelSerializer):
    students = UserSerializer(many=True, required=False, read_only=False)
    # user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    class Meta:
        model = Classes
        fields = [ "id", "class_name", "students",]
        depth = 1

    def create(self, validated_data):
        return Classes.objects.create(teacher=self.context['teacher'], **validated_data)
    def update(self, instance, validated_data):
        student = User.objects.get(id=self.context['student_id'])
        instance.students.add(student)
        return instance

class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ["id", "text"]

    def create(self, validated_data):
        homework = Homework.objects.get(id=self.context["homework"])
        return Answer.objects.create(homework=homework, student=self.context['student'],**validated_data)
class HomeworkSerializer(serializers.ModelSerializer):
    # subject_id = SubjectSerializer(many=True, read_only=False)
    subject_id = models.IntegerField("subject_id")
    class Meta:
        model = Homework
        fields = ["id", "name", "text", "deadline","subject_id"]
    def get_subject_id(self, obj):
        subject_id = obj.subject_id.id
        return subject_id
    def create(self, validated_data):
        # subject = Subject.objects.get(id=self.context["subject_id"])
        # subject_id = subject, **
        return Homework.objects.create(**validated_data)
class SubjectSerializer(serializers.ModelSerializer):
    class_id = ClassesSerializer(many=False, required=False, read_only=False)
    homeworks = serializers.SerializerMethodField()
    # check = models.CharField("check", default="хуй")
    class Meta:
        model = Subject
        homeworks = model.homeworks
        fields = ["id", "title", "homeworks", "class_id"]
        depth = 1
    def get_homeworks(self, obj):
        homework = obj.homeworks
        homework_serializer = HomeworkSerializer(homework, many=True)
        return homework_serializer.data

    def create(self, validated_data):
        classs = Classes.objects.get(id=self.context["class_id"])
        return Subject.objects.create(class_id = classs, **validated_data)

# class UsersSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Users
#         fields = "__all__" , "teacher"
