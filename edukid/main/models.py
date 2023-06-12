from django.db import models
from users.models import User

class Graphics(models.Model):
    title = models.CharField("Название графика", max_length=50)
    atempidoras = models.TextField("ЭЩКЕРЕЕЕЕЕЕ", default="Артемхуй соси")
    image = models.ImageField()

    def __str__(self):
        return self.title
    class Meta:
        verbose_name = "График"
        verbose_name_plural = "Графики"

class Classes(models.Model):

    class_name = models.CharField("Название класса", max_length=50)
    teacher = models.ForeignKey(User, on_delete = models.CASCADE)
    students = models.ManyToManyField("users.User", blank=True, related_name='classes_students')
    def __str__(self):
        return self.class_name
    class Meta:
        verbose_name = "Класс"
        verbose_name_plural = "Классы"

class Subject(models.Model):
    title = models.CharField("Название предмета", max_length = 50)
    class_id = models.ForeignKey(Classes, on_delete = models.CASCADE)
    def __str__(self):
        return str(self.title)
    def get_childrens(self):
        return self.homework_set.all()
    homeworks = property(get_childrens)
class Homework(models.Model):
    name = models.CharField("Название задания", max_length = 50)
    subject_id = models.ForeignKey(Subject, on_delete = models.CASCADE)
    text = models.TextField("Текст задания")
    homework_file = models.FileField("Файл задания", blank=True, null=True)
    deadline = models.DateField("Дедлайн", null=True)
    def __str__(self):
        return str(self.name)

class Answer(models.Model):
    student = models.ForeignKey(User, on_delete=models.CASCADE)
    homework = models.ForeignKey(Homework, on_delete=models.CASCADE)
    text = models.TextField("Ответ")
    def __str__(self):
        return str(self.homework)