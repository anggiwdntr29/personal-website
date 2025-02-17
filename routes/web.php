<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('users/Home', [
        'canLogin' => Route::has('login'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
Route::get('/about', function() {
    return Inertia::render('users/About');
});
Route::get('/education', function() {
    return Inertia::render('users/Education');
});
Route::get('/community', function() {
    return Inertia::render('users/Community');
});
Route::get('/experience', function() {
    return Inertia::render('users/Experience');
});
Route::get('/committee', function() {
    return Inertia::render('users/Committee');
});
Route::get('/activity', function() {
    return Inertia::render('users/Activity');
});
Route::get('/gallery', function() {
    return Inertia::render('users/Gallery');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    
    // Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard.index');


    // Route::get('/dashboard/community', [CommunityServiceController::class, 'index'])->name('community.index');
    // Route::get('/dashboard/community/add', [CommunityServiceController::class, 'add'])->name('community.add');
    // Route::get('/dashboard/community/edit/{id}', [CommunityServiceController::class, 'edit'])->name('community.edit');
    // Route::get('/dashboard/community/view/{id}', [CommunityServiceController::class, 'view'])->name('community.view');
   
    // Route::post('/dashboard/community/store', [CommunityServiceController::class, 'store'])->name('community.store');
    // Route::delete('/community/{id}', [CommunityServiceController::class, 'destroy'])->name('community.destroy');
    // Route::put('/community/{id}', [CommunityServiceController::class, 'update'])->name('community.update');
    // // Route::patch('/community', [CommunityServiceController::class, 'update'])->name('community.update');


    // Route::get('/dashboard/activity', [ActivityController::class, 'index'])->name('activity.index');


    // Route::get('/dashboard/experience', [ExperienceController::class, 'index'])->name('experience.index');
    
    
    // Route::get('/dashboard/research', [ResearchController::class, 'index'])->name('research.index');
});

require __DIR__.'/auth.php';
