from django.contrib import admin
from .models import Books
# Register your models here.

@admin.register(Books)
class BooksAdmin(admin.ModelAdmin):
    list_display = ('title', 'subtitle', 'author', 'ISBN')
    list_filter = ('title', 'author', 'ISBN')
    list_editable = ('ISBN',)
    search_fields = ('title', 'body')
    prepopulated_fields = {'slug': ('title',)}
    
