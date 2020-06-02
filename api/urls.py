from django.urls import path
from . import views

urlpatterns = [
    path('', views.BooksListAPIView.as_view()),
]
