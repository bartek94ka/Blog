from django.contrib import admin

from .models import *


class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'icon')
    prepopulated_fields = {'slug': ('name',)}

class NewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'posted_date')
    prepopulated_fields = {'slug': ('title',)}

class CommentsAdmin(admin.ModelAdmin):
    list_display = ('description', 'author')
    prepopulated_fields = {'slug': ('author',)}

admin.site.register(Category)
admin.site.register(Posts)
admin.site.register(Comments)
#admin.site.register(Category, CategoryAdmin)
#admin.site.register(News, NewsAdmin)