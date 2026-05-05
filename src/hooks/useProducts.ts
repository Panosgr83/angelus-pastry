import { useState, useEffect } from 'react';
import { supabase, Product, Category } from '../lib/supabase';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('display_order');

      if (!error && data) setProducts(data);
      setLoading(false);
    }
    fetchProducts();
  }, []);

  return { products, loading };
}

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCategories() {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('display_order');

      if (!error && data) setCategories(data);
      setLoading(false);
    }
    fetchCategories();
  }, []);

  return { categories, loading };
}

export function useFeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFeatured() {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('featured', true)
        .order('display_order')
        .limit(6);

      if (!error && data) setProducts(data);
      setLoading(false);
    }
    fetchFeatured();
  }, []);

  return { products, loading };
}

export function useCategoryBySlug(slug: string | undefined) {
  const [category, setCategory] = useState<Category | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) { setLoading(false); return; }

    async function fetchCategory() {
      const { data } = await supabase
        .from('categories')
        .select('*')
        .eq('slug', slug)
        .maybeSingle();
      setCategory(data);
      setLoading(false);
    }
    fetchCategory();
  }, [slug]);

  return { category, loading };
}

export function useProductBySlug(slug: string | undefined) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) { setLoading(false); return; }

    async function fetchProduct() {
      const { data } = await supabase
        .from('products')
        .select('*')
        .eq('slug', slug)
        .maybeSingle();
      setProduct(data);
      setLoading(false);
    }
    fetchProduct();
  }, [slug]);

  return { product, loading };
}
