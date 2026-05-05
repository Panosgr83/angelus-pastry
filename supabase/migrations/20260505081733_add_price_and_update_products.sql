/*
  # Add price column and update products with descriptions, prices, and relevant images

  1. Changes
    - `products`: add `price` (numeric) and `price_label` (text) columns
    - Update all existing products with realistic prices, detailed Greek descriptions, and specific Pexels images
    - Update category images with more relevant photos

  2. Notes
    - price is stored as numeric (e.g. 2.50 for €2.50)
    - price_label is for display (e.g. "από 2,50€" or "2,50€ / τεμ.")
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'products' AND column_name = 'price'
  ) THEN
    ALTER TABLE products ADD COLUMN price numeric(10,2) DEFAULT NULL;
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'products' AND column_name = 'price_label'
  ) THEN
    ALTER TABLE products ADD COLUMN price_label text DEFAULT '';
  END IF;
END $$;

-- Update category images with specific, relevant photos
UPDATE categories SET image_url = 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=1200' WHERE slug = 'psomia';
UPDATE categories SET image_url = 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=1200' WHERE slug = 'zacharoplastiki';
UPDATE categories SET image_url = 'https://images.pexels.com/photos/6607235/pexels-photo-6607235.jpeg?auto=compress&cs=tinysrgb&w=1200' WHERE slug = 'koulourakia';
UPDATE categories SET image_url = 'https://images.pexels.com/photos/5848391/pexels-photo-5848391.jpeg?auto=compress&cs=tinysrgb&w=1200' WHERE slug = 'paradosiaka';

-- Update category descriptions
UPDATE categories SET description = 'Φρέσκο ψωμί κάθε πρωί — από παραδοσιακό χωριάτικο με προζύμι μέχρι πολύσπορα και σικάλεως. Ψημένο στον φούρνο μας από τα χαράματα.' WHERE slug = 'psomia';
UPDATE categories SET description = 'Χειροποίητα γλυκά και τούρτες από τον ζαχαροπλάστη μας — γαλακτομπούρεκο, εκλαίρ, τάρτες και τούρτες για κάθε περίσταση.' WHERE slug = 'zacharoplastiki';
UPDATE categories SET description = 'Τραγανά κουλούρια Θεσσαλονίκης, φουσκωτά τυροπιτάκια με φέτα και σπανακοπιτάκια με φρέσκο σπανάκι — ιδανικά για πρωινό ή σνακ.' WHERE slug = 'koulourakia';
UPDATE categories SET description = 'Παραδοσιακές ελληνικές συνταγές από γενιά σε γενιά — τσουρέκι με μαστίχα, βασιλόπιτα, πασχαλινές κουλούρες και λαγάνα.' WHERE slug = 'paradosiaka';

-- Update products: Ψωμιά
UPDATE products SET
  description = 'Το κλασικό χωριάτικο ψωμί μας, φτιαγμένο με προζύμι τριών ημερών και αλεύρι σκληρού σταριού από ελληνικούς αγρούς. Τραγανή κόρα, αέρινη ψίχα και άρωμα που σε πάει πίσω στα παιδικά χρόνια. Διαθέσιμο σε μεγάλο (1 kg) και μικρό (500 g).',
  price = 2.80,
  price_label = 'από 2,80€',
  image_url = 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=800'
WHERE slug = 'psomi-choriatiko';

UPDATE products SET
  description = 'Ψωμί με μείγμα από σουσάμι, λιναρόσπορο, ηλιόσπορο, κολοκυθόσπορο και βρώμη. Πλούσιο σε φυτικές ίνες, με ελαφριά γλυκιά γεύση και τραγανή κόρα. Ιδανικό για σαντουιτσάκι ή με τυρί φέτα.',
  price = 3.20,
  price_label = 'από 3,20€',
  image_url = 'https://images.pexels.com/photos/4686960/pexels-photo-4686960.jpeg?auto=compress&cs=tinysrgb&w=800'
WHERE slug = 'psomi-polysporo';

UPDATE products SET
  description = 'Η παραδοσιακή λαγάνα της Καθαράς Δευτέρας, αλλά στο Angelus τη φτιάχνουμε φρέσκια κάθε Παρασκευή και Σάββατο. Επίπεδη, τραγανή στις άκρες, μαλακή στη μέση, με χοντρό αλάτι και σουσάμι. Ταιριάζει τέλεια με ταραμά και χαλβά.',
  price = 2.50,
  price_label = '2,50€ / τεμ.',
  image_url = 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=800'
WHERE slug = 'lagana';

-- Update products: Ζαχαροπλαστική
UPDATE products SET
  description = 'Το κλασικό ελληνικό γαλακτομπούρεκο σε αναβαθμισμένη έκδοση. Τριαντάφυλλα φύλλα βουτύρου, κρέμα σιμιγδαλιού με βανίλια Μαδαγασκάρης και σιρόπι λεμονιού. Σερβίρεται ελαφρά ζεστό. Τιμή ανά κομμάτι.',
  price = 3.50,
  price_label = '3,50€ / κομμάτι',
  image_url = 'https://images.pexels.com/photos/3560168/pexels-photo-3560168.jpeg?auto=compress&cs=tinysrgb&w=800'
WHERE slug = 'galaktoboureko';

UPDATE products SET
  description = 'Αέρινα εκλαίρ γεμιστά με κρέμα ζαχαροπλαστικής και γκλασάρισμα από couverture σοκολάτας 70% κακάο. Επίσης διαθέσιμα με κρέμα βανίλια και λευκή σοκολάτα. Ιδανικά για κάθε ώρα της μέρας.',
  price = 3.00,
  price_label = '3,00€ / τεμ.',
  image_url = 'https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=800'
WHERE slug = 'ekler';

UPDATE products SET
  description = 'Χειροποίητες τούρτες κατά παραγγελία για γενέθλια, βαπτίσεις, γάμους και κάθε γιορτή. Επιλέξτε από σοκολατίνα, φράουλα, λεμόνι ή δημιουργήστε τη δική σας. Απαιτείται προκαταβολή 48 ωρών. Τιμή βάσει μεγέθους.',
  price = 35.00,
  price_label = 'από 35€',
  image_url = 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=800'
WHERE slug = 'tourtes';

UPDATE products SET
  description = 'Παραδοσιακός μπακλαβάς με φύλλο κρούστας βουτύρου, γέμιση από καρύδια και φυστίκια Αιγίνης, και σιρόπι με μέλι θυμαρίσιο και ξυλάκι κανέλας. Μια γλυκιά απόλαυση που λιώνει στο στόμα.',
  price = 3.80,
  price_label = '3,80€ / κομμάτι',
  image_url = 'https://images.pexels.com/photos/5848391/pexels-photo-5848391.jpeg?auto=compress&cs=tinysrgb&w=800'
WHERE slug = 'mpaklavas';

-- Update products: Κουλούρια & Τυροπιτάκια
UPDATE products SET
  description = 'Τα αυθεντικά κουλούρια Θεσσαλονίκης, τραγανά απ έξω και ελαφρώς μαλακά μέσα, με γενναία δόση σουσαμιού. Φτιαγμένα κάθε πρωί από τα χαράματα, ιδανικά για πρωινό με τυρί ή ελιές.',
  price = 0.80,
  price_label = '0,80€ / τεμ.',
  image_url = 'https://images.pexels.com/photos/6607235/pexels-photo-6607235.jpeg?auto=compress&cs=tinysrgb&w=800'
WHERE slug = 'koulourakia-thessalonikis';

UPDATE products SET
  description = 'Τριγωνάκια και στριφτάρια με γέμιση από φέτα ΠΟΠ, αυγό και φρέσκο δυόσμο, τυλιγμένα σε τριαντάφυλλα φύλλα κρούστας βουτύρου. Τραγανά, ζεστά και αρωματικά — το απόλυτο ελληνικό σνακ.',
  price = 1.50,
  price_label = '1,50€ / τεμ.',
  image_url = 'https://images.pexels.com/photos/5949897/pexels-photo-5949897.jpeg?auto=compress&cs=tinysrgb&w=800'
WHERE slug = 'tyropitakia';

UPDATE products SET
  description = 'Τριγωνάκια με γέμιση από φρέσκο σπανάκι, ανθότυρο, φέτα και μυρωδικά (άνηθος, μαϊντανός, σκόρδο). Ψημένα σε φύλλο κρούστας ολικής άλεσης. Ελαφριά, θρεπτικά και εξαιρετικά νόστιμα.',
  price = 1.50,
  price_label = '1,50€ / τεμ.',
  image_url = 'https://images.pexels.com/photos/8697572/pexels-photo-8697572.jpeg?auto=compress&cs=tinysrgb&w=800'
WHERE slug = 'spanakopitakia';

-- Update products: Παραδοσιακά
UPDATE products SET
  description = 'Η παραδοσιακή πασχαλινή κουλούρα που αρωματίζει το σπίτι — φτιαγμένη με μαχλέπι, βανίλια και ξύσμα πορτοκαλιού. Πλεκτή, γυαλιστερή από αυγό και στολισμένη με κόκκινα αυγά. Διαθέσιμη από Μεγάλη Εβδομάδα.',
  price = 8.00,
  price_label = '8,00€ / τεμ.',
  image_url = 'https://images.pexels.com/photos/7474241/pexels-photo-7474241.jpeg?auto=compress&cs=tinysrgb&w=800'
WHERE slug = 'kouloura-paschalini';

UPDATE products SET
  description = 'Αφράτο, μυρωδάτο τσουρέκι με μαστίχα Χίου και κουκουνάρι, πλεγμένο σε τρία κλωνάρια. Ψημένο αργά για να αποκτήσει τη χαρακτηριστική ινώδη υφή που λιώνει στο στόμα. Διαθέσιμο όλο τον χρόνο.',
  price = 9.00,
  price_label = 'από 9,00€',
  image_url = 'https://images.pexels.com/photos/5765838/pexels-photo-5765838.jpeg?auto=compress&cs=tinysrgb&w=800'
WHERE slug = 'tsoureki';

UPDATE products SET
  description = 'Η παραδοσιακή βασιλόπιτα του Αγ. Βασίλη, φλουφάτη και αρωματισμένη με ξύσμα πορτοκαλιού και βανίλια. Κάθε πίτα κρύβει το φλουρί για τυχερή χρονιά! Διαθέσιμη από Δεκέμβριο. Τιμή βάσει μεγέθους.',
  price = 12.00,
  price_label = 'από 12,00€',
  image_url = 'https://images.pexels.com/photos/4110541/pexels-photo-4110541.jpeg?auto=compress&cs=tinysrgb&w=800'
WHERE slug = 'vasilopita';
