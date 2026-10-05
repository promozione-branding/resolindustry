import { connect } from "@/config/db";
import Blog from "@/models/blog";
// import cloudinary from "@/utils/cloudinary";
import { uploadToR2 } from "@/lib/uploadToR2";
import { deleteFromR2 } from "@/lib/deleteFromR2";

// GET /api/blog/:id
export async function GET(_req, { params }) {
  const { id } = await params
  await connect();
  const blog = await Blog.findById(id);
  if (!blog) return new Response("Not found", { status: 404 });
  return new Response(JSON.stringify(blog), { status: 200 });
}

// PUT /api/blog/:id 
export async function PUT(req, { params }) {
  try {
    const { id } = await params;
    await connect();

    const formData = await req.formData();

    const data = {
      title: formData.get("title"),
      date: formData.get("date"),
      permalink: formData.get("permalink"),
      content: formData.get("content"),
      metaTitle: formData.get("metaTitle"),
      metaDescription: formData.get("metaDescription"),
    };

    const newFile = formData.get("image");

    const existing = await Blog.findById(id);
    if (!existing) {
      return new Response("Not found", { status: 404 });
    }

    if (newFile && newFile.size > 0) {
      if (existing.imageFileId) {
        await deleteFromR2(existing.imageFileId);
      }

      // ⬆️ Upload new image to R2
      const bytes = await newFile.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const uploadedImage = await uploadToR2({
        file: buffer,
        folder: "resol-industry",
        fileName: `${Date.now()}-${newFile.name}`,
        contentType: newFile.type,
      });

      data.image = uploadedImage.url;
      data.imageFileId = uploadedImage.key; // ✅ store key
    }

    const updated = await Blog.findByIdAndUpdate(id, data, {
      new: true,
    });

    return new Response(JSON.stringify(updated), { status: 200 });

  } catch (err) {
    console.error("PUT /api/blog/:id error:", err);
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500 }
    );
  }
}

// DELETE /api/blog/:id
export async function DELETE(_req, { params }) {
  try {
    const { id } = await params;
    await connect();

    const blog = await Blog.findById(id);
    if (!blog) {
      return new Response("Not found", { status: 404 });
    }

    if (blog.imageFileId) {
      await deleteFromR2(blog.imageFileId);
    }

    await Blog.findByIdAndDelete(id);

    return new Response("Deleted successfully", { status: 200 });

  } catch (err) {
    console.error("DELETE /api/blog/:id error:", err);
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500 }
    );
  }
}