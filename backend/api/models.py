import random
import string

from django.contrib.auth import get_user_model
from django.db import models

# Create your models here.


class ExtendedUser(models.Model):
    user = models.OneToOneField(get_user_model(), on_delete=models.CASCADE, related_name='extended_user')
    data = models.CharField(max_length=100, null=True)


class Course(models.Model):
    id = models.CharField(primary_key=True, max_length=15, editable=False)
    name = models.CharField(max_length=30)
    description = models.CharField(max_length=100)
    created_at = models.DateTimeField(editable=False, auto_now_add=True, null=True)
    updated_at = models.DateTimeField(editable=False, auto_now=True, null=True)

    def save(self, force_insert=False, force_update=False, using=None,
             update_fields=None):
        is_new = self._state.adding
        if is_new:
            self.id = 'c_' + ''.join(random.choice(string.ascii_uppercase + string.digits) for _ in range(5))
        return super(Course, self).save(force_insert, force_update, using, update_fields)


class Activity(models.Model):
    name = models.CharField(max_length=30)
    description = models.CharField(max_length=100)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='activities')
