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

      if (!error && data) {
        setProducts(data);
      }
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

      if (!error && data) {
        setCategories(data);
      }
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

      if (!error && data) {
        setProducts(data);
      }
      setLoading(false);
    }

    fetchFeatured();
  }, []);

  return { products, loading };
}
