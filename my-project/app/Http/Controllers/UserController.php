<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
    function register(Request $req)
    {
        try {
            // Validate request data
            $req->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|string|email|max:255|unique:users',
                'password' => 'required|string|min:8',
            ]);

            // Create new user
            $user = new User;
            $user->name = $req->input('name');
            $user->email = $req->input('email');
            $user->password = Hash::make($req->input('password'));
            $user->role = 'user'; // Définition automatique du rôle sur "utilisateur"
            $user->save();

            return response()->json($user, 201); // Retourner une réponse avec le code de statut 201 (Créé)
        } catch (\Exception $e) {
            Log::error('Échec de l\'enregistrement de l\'utilisateur: ' . $e->getMessage());
            Log::error('Trace de l\'exception: ', ['exception' => $e]);
            return response()->json(['message' => 'Échec de l\'enregistrement de l\'utilisateur', 'error' => $e->getMessage()], 500);
        }
    }
    

    function login(Request $req)
    {
        $user = User::where('email', $req->email)->first();
        if (!$user || !Hash::check($req->password, $user->password)) {
            return ["error" => "Email or password is not matched"];
        }

        return $user;
    }
}
