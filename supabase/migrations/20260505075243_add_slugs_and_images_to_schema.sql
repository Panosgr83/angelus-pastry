/*
  # Add slugs and image fields to categories and products

  1. Changes
    - `categories`: add `slug` (unique, text) and `image_url` columns
    - `products`: add `slug` (unique, text) column
    - Populate slugs from existing data
    - Add indexes on slug columns for fast lookups

  2. Notes
    - Slugs are URL-friendly identifiers (e.g. "psomia", "zacharoplastiki")
    - Used for clean URLs like /category/psomia instead of UUIDs
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'categories' AND column_name = 'slug'
  ) THEN
    ALTER TABLE categories ADD COLUMN slug text UNIQUE;
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'categories' AND column_name = 'image_url'
  ) THEN
    ALTER TABLE categories ADD COLUMN image_url text DEFAULT '';
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'products' AND column_name = 'slug'
  ) THEN
    ALTER TABLE products ADD COLUMN slug text UNIQUE;
  END IF;
END $$;

-- Populate slugs for categories
UPDATE categories SET slug = 'psomia' WHERE name = 'Ψωμιά' AND slug IS NULL;
UPDATE categories SET slug = 'zacharoplastiki' WHERE name = 'Ζαχαροπλαστική' AND slug IS NULL;
UPDATE categories SET slug = 'koulourakia' WHERE name = 'Κουλούρια & Τυροπιτάκια' AND slug IS NULL;
UPDATE categories SET slug = 'paradosiaka' WHERE name = 'Παραδοσιακά' AND slug IS NULL;

-- Add category images
UPDATE categories SET image_url = 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=800' WHERE name = 'Ψωμιά';
UPDATE categories SET image_url = 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=800' WHERE name = 'Ζαχαροπλαστική';
UPDATE categories SET image_url = 'https://images.pexels.com/photos/6607235/pexels-photo-6607235.jpeg?auto=compress&cs=tinysrgb&w=800' WHERE name = 'Κουλούρια & Τυροπιτάκια';
UPDATE categories SET image_url = 'https://images.pexels.com/photos/5848391/pexels-photo-5848391.jpeg?auto=compress&cs=tinysrgb&w=800' WHERE name = 'Παραδοσιακά';

-- Populate slugs for products
UPDATE products SET slug = 'psomi-choriatiko' WHERE name = 'Ψωμί Χωριάτικο' AND slug IS NULL;
UPDATE products SET slug = 'psomi-polysporo' WHERE name = 'Ψωμί Πολύσπορο' AND slug IS NULL;
UPDATE products SET slug = 'lagana' WHERE name = 'Λαγάνα' AND slug IS NULL;
UPDATE products SET slug = 'galaktoboureko' WHERE name = 'Γαλακτομπούρεκο' AND slug IS NULL;
UPDATE products SET slug = 'ekler' WHERE name = 'Εκλαίρ' AND slug IS NULL;
UPDATE products SET slug = 'tourtes' WHERE name = 'Τούρτες' AND slug IS NULL;
UPDATE products SET slug = 'mpaklavas' WHERE name = 'Μπακλαβάς' AND slug IS NULL;
UPDATE products SET slug = 'koulourakia-thessalonikis' WHERE name = 'Κουλούρια Θεσσαλονίκης' AND slug IS NULL;
UPDATE products SET slug = 'tyropitakia' WHERE name = 'Τυροπιτάκια' AND slug IS NULL;
UPDATE products SET slug = 'spanakopitakia' WHERE name = 'Σπανακοπιτάκια' AND slug IS NULL;
UPDATE products SET slug = 'kouloura-paschalini' WHERE name = 'Κουλούρα Πασχαλινή' AND slug IS NULL;
UPDATE products SET slug = 'tsoureki' WHERE name = 'Τσουρέκι' AND slug IS NULL;
UPDATE products SET slug = 'vasilopita' WHERE name = 'Βασιλόπιτα' AND slug IS NULL;

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS categories_slug_idx ON categories(slug);
CREATE INDEX IF NOT EXISTS products_slug_idx ON products(slug);
CREATE INDEX IF NOT EXISTS products_category_id_idx ON products(category_id);
