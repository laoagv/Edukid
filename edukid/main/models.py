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
    students = models.CharField('Список учеников', max_length=50)

    def __str__(self):
        return self.class_name
    class Meta:
        verbose_name = "Класс"
        verbose_name_plural = "Классы"

class Subject(models.Model):
    class_id = models.ForeignKey(Classes, on_delete = models.CASCADE)
    title = models.CharField("Название предмета", max_length = 50)
    def __str__(self):
        return str(self.class_id)
class Homework(models.Model):
    subject_id = models.ForeignKey(Subject, on_delete = models.CASCADE)
    name = models.CharField("Название задания", max_length = 50)
    text = models.TextField("Текст задания")
    homework_file = models.FileField("Файл задания")
    deadline = models.DateField("Дедлайн")

