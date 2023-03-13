from django.db import models

class Graphics(models.Model):
    title = models.CharField("Название графика", max_length=50)
    atempidoras = models.TextField("ЭЩКЕРЕЕЕЕЕЕ", default="Артемхуй соси")
    image = models.ImageField()

    def __str__(self):
        return self.title
    class Meta:
        verbose_name = "График"
        verbose_name_plural = "Графики"

class Users(models.Model):
    name = models.CharField("Имя", max_length = 20)
    surname = models.CharField("Фамилия", max_length=40)
    father_name = models.CharField("Отчество", max_length=30)
    type_of_user = models.CharField("Роль", max_length=8)
    email = models.EmailField("Почта")
    password = models.CharField("Пароль", max_length=35)
    def __str__(self):
        return " ".join([self.name, self.surname, self.father_name])
    class Meta:
        verbose_name = "Пользователь"
        verbose_name_plural = "Пользователи"



# class UserProfile(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE)
#     father_name = models.CharField("Отчество", max_length=30)
#     type_of_user = models.CharField("Роль", max_length=8)
#
#     def __unicode__(self):
#         return self.user
#
#     class Meta:
#         verbose_name = 'Профиль'
#         verbose_name_plural = 'Профили'