<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Recette;

class RecetteController extends Controller
{
    public function addRecette(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'file' => 'nullable|file|mimes:jpg,png,jpeg,gif|max:2048',
        ]);

        $recette = new Recette;
        $recette->name = $request->name;

        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $filename = time() . '_' . $file->getClientOriginalName();
            $file->move(public_path('uploads'), $filename);
            $recette->file_path = 'uploads/' . $filename;
        }

        $recette->save();

        return response()->json($recette, 201); // Code 201 pour indiquer que la ressource a été créée
    }

    public function recettelist()
    {
        return Recette::all();
    }

    public function delete($id)
    {
        $recette = Recette::find($id);

        if ($recette) {
            $recette->delete();
            return response()->json(['result' => 'recette supprimée'], 200); // Code 200 pour succès
        } else {
            return response()->json(['result' => 'Recette non trouvée'], 404); // Code 404 pour non trouvé
        }
    }

    public function getProduct($id)
    {
        $recette = Recette::find($id);

        if ($recette) {
            return response()->json($recette, 200);
        } else {
            return response()->json(['result' => 'Recette non trouvée'], 404);
        }
    }
}
