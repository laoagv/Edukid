# Generated by Django 4.1.4 on 2023-06-07 17:51

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('main', '0007_alter_homework_deadline_alter_homework_homework_file'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Ansewr',
            new_name='Answer',
        ),
    ]
