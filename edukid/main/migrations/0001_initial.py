# Generated by Django 4.1.4 on 2023-04-13 16:16

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Classes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('class_name', models.CharField(max_length=50, verbose_name='Название класса')),
                ('students', models.CharField(max_length=50, verbose_name='Список учеников')),
                ('teacher', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Класс',
                'verbose_name_plural': 'Классы',
            },
        ),
        migrations.CreateModel(
            name='Graphics',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50, verbose_name='Название графика')),
                ('atempidoras', models.TextField(default='Артемхуй соси', verbose_name='ЭЩКЕРЕЕЕЕЕЕ')),
                ('image', models.ImageField(upload_to='')),
            ],
            options={
                'verbose_name': 'График',
                'verbose_name_plural': 'Графики',
            },
        ),
        migrations.CreateModel(
            name='Subject',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, verbose_name='Название предмета')),
                ('class_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.classes')),
            ],
        ),
        migrations.CreateModel(
            name='Homework',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, verbose_name='Название задания')),
                ('text', models.TextField(verbose_name='Текст задания')),
                ('homework_file', models.FileField(upload_to='', verbose_name='Файл задания')),
                ('deadline', models.DateField(verbose_name='Дедлайн')),
                ('subject_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.subject')),
            ],
        ),
    ]
