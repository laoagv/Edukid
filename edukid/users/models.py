from django.db import models
from datetime import datetime
# from main.models import Classes
from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser
)


class UserManager(BaseUserManager):
    def create_user(self, email,  password=None):
        """
        Creates and saves a User with the given email, date of
        birth and password.
        """
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            email=self.normalize_email(email),
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None):
        """
        Creates and saves a superuser with the given email, date of
        birth and password.
        """
        user = self.create_user(
            email,
            password=password,
        )
        user.is_admin = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser):
    email = models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True,
    )
    ROLE_CHOISES  = (
        ('pupil', 'Ученик'),
        ('teacher', 'Учитель'),
        ('parent', 'Родитель'),
    )
    GENDER_CHOISES = (
        ("man", "мужской"),
        ("woman", "женский")
    )
    name = models.CharField("Имя", max_length=20)
    phone =  models.IntegerField("Номер телефона", unique=True, null=True)
    school = models.CharField("Школа", max_length= 60, default="блять", blank=True)
    gender = models.CharField("Пол", max_length=7, choices = GENDER_CHOISES, default = GENDER_CHOISES[0])
    date_of_birth = models.DateField("Дата рождения", null=True, blank=True)
    picture = models.ImageField("Фото профиля", blank=True)
    surname = models.CharField("Фамилия", max_length=40)
    father_name = models.CharField("Отчество", max_length=30)
    type_of_user = models.CharField("Роль", max_length=8, choices = ROLE_CHOISES, default=ROLE_CHOISES[0])
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    classess = models.ManyToManyField("main.Classes", blank=True)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        # Simplest possible answer: All admins are staff
        return self.is_admin