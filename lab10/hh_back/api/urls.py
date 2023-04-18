from django.contrib import admin
from django.urls import path
from api import views
from .class_view import *

urlpatterns = [
    path('companies/', CompanyListView.as_view()),
    path('companies/<int:id>/', views.company_detail),
    path('companies/<int:id>/vacancies/', CompanyVacanciesView.as_view()),
    path('vacancies/', VacancyListView.as_view()),
    path('vacancies/<int:id>/', VacancyView.as_view()),
    path('vacancies/top_ten/', TopVacancies.as_view()),
]