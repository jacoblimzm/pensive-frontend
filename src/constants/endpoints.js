
// for "accounts" route
const logInPath = "accounts/user/login/"
const logOutPath = "accounts/user/logout/"
const registerPath = "accounts/user/register/"
const apiTokenPath = "accounts/api/token/" 
const apiRefreshTokenPath = "accounts/api/token/refresh/"

// for "api-blog" route
const allPostsPath = "api-blog/"
const allCategoriesPath = "api-blog/categories/"
const newPostPath = "api-blog/new/"

// path("categories/<category_name>", views.CategoryDetailView.as_view()),
// path("<slug>/", views.BlogEntryDetailView.as_view()),
// path("<slug>/edit", views.BlogEntryEditView.as_view()),

export { 
    logInPath, 
    logOutPath, 
    registerPath, 
    apiTokenPath, 
    apiRefreshTokenPath, 
    allPostsPath,
    allCategoriesPath,
    newPostPath
}