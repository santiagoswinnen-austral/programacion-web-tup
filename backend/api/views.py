from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets

from api.models import Course
from api.serializers import CourseSerializer


class CourseViewSet(viewsets.ModelViewSet):
    serializer_class = CourseSerializer
    queryset = Course.objects.all()
