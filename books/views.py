from django.shortcuts import render
from .models import Books
# Create your views here.

def book_list(request):
    books = Books.objects.all()
    context = {
        'books': books,
        'title': "Home",
    }
    return render(request, 'books/list.html', context)
