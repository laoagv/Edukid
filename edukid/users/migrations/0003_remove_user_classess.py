# Generated by Django 4.1.4 on 2023-05-29 19:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_user_classess'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='classess',
        ),
    ]
