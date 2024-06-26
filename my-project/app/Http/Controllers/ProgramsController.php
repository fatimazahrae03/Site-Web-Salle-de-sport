<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Program;

class ProgramsController extends Controller
{
    public function addPrograms(Request $request)
    {
        $program = new Program;
        $program->name = $request->name;
       

        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $filename = time() . '_' . $file->getClientOriginalName();
            $file->move(public_path('uploads'), $filename);
            $program->file_path = 'uploads/' . $filename;
        }

        $program->save();
        return response()->json($program);
    }
        public function programslist(){
            return Program::all();
        }
        function delete($id){
           $result =Program::where('id',$id)->delete();
        if($result){
            return ["result"=>"produits supprimee"];
        }
        else{
            return ["result"=>"failed"];
        }
        }
        function getProduct($id) {
            return Program ::find($id);
         }
}
