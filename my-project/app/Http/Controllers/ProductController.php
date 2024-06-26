<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function addCoachs(Request $request)
    {
        $product = new Product;
        $product->name = $request->name;
        $product->description = $request->description;

        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $filename = time() . '_' . $file->getClientOriginalName();
            $file->move(public_path('uploads'), $filename);
            $product->file_path = 'uploads/' . $filename;
        }

        $product->save();
        return response()->json($product);
    }
        public function coachslist(){
            return Product::all();
        }
        function delete($id){
           $result =Product::where('id',$id)->delete();
        if($result){
            return ["result"=>"produits supprimee"];
        }
        else{
            return ["result"=>"failed"];
        }
        }
        function getProduct($id) {
            return Product ::find($id);
         }

}