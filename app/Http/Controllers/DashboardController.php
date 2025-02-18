<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Post;
use Illuminate\Support\Facades\Storage;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $query = Post::query();
        
        if ($request->category && $request->category !== 'all') {
            $query->where('category', $request->category);
        }
        
        $data = $query->paginate(10);
        
        return Inertia::render('Dashboard', [
            'data' => $data->items(),
            'pagination' => [
                'current_page' => $data->currentPage(),
                'last_page' => $data->lastPage(),
                'next_page_url' => $data->nextPageUrl(),
                'prev_page_url' => $data->previousPageUrl(),
                'from' => ($data->currentPage() - 1) * $data->perPage() + 1,
            ],
            'filters' => [
                'category' => $request->category ?? 'all',
            ],
        ]);
    }

    public function add()
    {
        return Inertia::render('Post/AddPost');
    }
    // public function view(string $id)
    // {
    //     return Inertia::render('Manage/Community/ViewCommunity', ['data' => Community::find($id)]);
    // }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'desc' => 'required',
            'category' => 'required|string',
            'cover' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        if ($request->cover) {
            $file_name = time() . '_' . uniqid() . '.' . $request->cover->extension();
            $request->cover->move('storage/images', $file_name);
        }

        Post::create([
            'title' => $request->title,
            'desc' => $request->desc,
            'cover' => $file_name,
            'category' => $request->category,
        ])->refresh();
    }

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
    
    public function destroy($id)
    {
        $post = Post::findOrFail($id);

        if ($post->cover && $post->cover !== 'default.png') {
            $coverPath = public_path("storage/images/{$post->cover}");
            if (file_exists($coverPath)) {
                unlink($coverPath);
            }
        }

        $post->delete();

        return response()->json([
            'message' => 'Community deleted successfully',
        ], 200);
    }
}