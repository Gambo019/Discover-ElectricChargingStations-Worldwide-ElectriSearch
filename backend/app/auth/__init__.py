from flask import Blueprint

# Authentication Blueprint
auth_blueprint = Blueprint('auth', __name__, template_folder='templates')

from . import routes