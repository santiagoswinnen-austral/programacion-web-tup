# Generated by Django 3.2.8 on 2021-11-06 14:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_extendeduser'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='id',
            field=models.CharField(max_length=15, primary_key=True, serialize=False),
        ),
    ]
