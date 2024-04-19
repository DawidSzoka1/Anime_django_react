from django.contrib import admin
from accounts.models import User


# Register your models here.
class UsersAdmin(admin.ModelAdmin):
    list_display = ('email',)
    list_filter = ('email',)
    search_fields = ('email',)


admin.site.register(User, UsersAdmin)
