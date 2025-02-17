<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Community;
use Illuminate\Support\Facades\Storage;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Dashboard');
    }
    // public function view(string $id)
    // {
    //     return Inertia::render('Manage/Community/ViewCommunity', ['data' => Community::find($id)]);
    // }

    
    
    // public function add()
    // {
    //     return Inertia::render('Manage/Community/AddCommunity');
    // }
    // public function store(Request $request)
    // {
    //     $request->validate([
    //         'title' => 'required',
    //         'desc' => 'required',
    //         'cover' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
    //         'images.*' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
    //     ]);

    //     if ($request->cover) {
    //         $file_name = time() . '_' . uniqid() . '.' . $request->cover->extension();
    //         $request->cover->move('storage/images', $file_name);
    //     }

    //     $imagePaths = [];
    //     if ($request->hasFile('images')) {
    //         foreach ($request->file('images') as $image) {
    //             $imageName = time() . '_' . uniqid() . '.' . $image->extension();
    //             $image->move('storage/images', $imageName);
    //             $imagePaths[] = $imageName; 
    //         }
    //     }
        
    //     $community = Community::create([
    //         'title' => $request->title,
    //         'desc' => $request->desc,
    //         'cover' => $file_name,
    //         'images' => $imagePaths
    //     ])->refresh();

    //     return to_route('community.index');
    // }
    // public function edit(string $id)
    // {
    //     return Inertia::render('Manage/Community/EditCommunity', ['data' => Community::find($id)]);
    // }
    // public function update(Request $request, $id)
    // {
    //     // Validasi input
    //     $request->validate([
    //         'title' => 'required',
    //         'desc' => 'required',
    //         'cover' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
    //         'images.*' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
    //     ]);
    
    //     // Temukan komunitas yang akan diupdate
    //     $community = Community::findOrFail($id);
    
    //     // Handle cover image
    //     if ($request->hasFile('cover')) {
    //         if ($community->cover && $community->cover !== 'default.png') {
    //             Storage::disk('public')->delete('images/' . $community->cover);
    //         }
    
    //         $file_name = time() . '_' . uniqid() . '.' . $request->cover->extension();
    //         $request->cover->storeAs('images', $file_name, 'public');
    //         $community->cover = $file_name;
    //     }
    
    //     // Ambil existing images dari request
    //     $existingImages = $request->input('existing_images', []);
    
    //     // Ambil gambar lama dari database (tidak perlu json_decode jika sudah di-cast sebagai array)
    //     $oldImages = $community->images ?? [];
    
    //     // Filter hanya gambar lama yang masih ada
    //     $remainingImages = array_intersect($oldImages, $existingImages);
    
    //     // Handle new images
    //     $newImagePaths = [];
    //     if ($request->hasFile('new_images')) {
    //         foreach ($request->file('new_images') as $image) {
    //             $imageName = time() . '_' . uniqid() . '.' . $image->extension();
    //             $image->move('public/images', $imageName);
    //             $newImagePaths[] = $imageName;
    //         }
    //     }
    
    //     // Gabungkan gambar lama yang masih ada dengan gambar baru
    //     $finalImages = array_merge($remainingImages, $newImagePaths);
    
    //     // Simpan ke database
    //     $community->images = $finalImages; // Tidak perlu json_encode jika di-cast sebagai array
    //     $community->title = $request->title;
    //     $community->desc = $request->desc;
    //     $community->save();
    
    //     return redirect()->route('community.index')->with('success', 'Community updated successfully!');
    // }
    
    // public function destroy($id)
    // {
    //     $community = Community::findOrFail($id);

    //     if ($community->cover && $community->cover !== 'default.png') {
    //         $coverPath = public_path("storage/images/{$community->cover}");
    //         if (file_exists($coverPath)) {
    //             unlink($coverPath);
    //         }
    //     }

    //     if (!empty($community->images)) {
    //         foreach ($community->images as $image) {
    //             $imagePath = public_path("storage/images/{$image}");
    //             if (file_exists($imagePath)) {
    //                 unlink($imagePath);
    //             }
    //         }
    //     }

    //     $community->delete();

    //     return response()->json([
    //         'message' => 'Community deleted successfully',
    //     ], 200);
    // }
}