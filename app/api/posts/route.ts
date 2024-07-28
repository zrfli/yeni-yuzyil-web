import { NextRequest, NextResponse } from "next/server";

export async function GET (request: NextRequest){
    const json = {
        greeting: "asf"
    };
    
    return NextResponse.json(json);
}