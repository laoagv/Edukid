# Generated by Django 4.1.4 on 2023-06-07 15:05

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('main', '0004_classes_students'),
    ]

    operations = [
        migrations.CreateModel(
            name='Ansewr',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.TextField(verbose_name='Ответ')),
                ('homework', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='main.homework')),
                ('student', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
