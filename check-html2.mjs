async function check() {
  try {
    const res = await fetch('http://localhost:3000/import-export');
    const html = await res.text();

    // Find two-col-cards
    const idx5 = html.indexOf('class="two-col-cards"');
    if (idx5 >= 0) {
      const section5 = html.substring(idx5, idx5 + 3000);
      console.log('\n=== TWO COL CARDS ===');
      console.log(section5);
    }

    // Find footer
    const idx6 = html.indexOf('class="footer-main-grid"');
    if (idx6 >= 0) {
      const section6 = html.substring(idx6, idx6 + 3000);
      console.log('\n=== FOOTER MAIN GRID ===');
      console.log(section6);
    }

  } catch (e) {
    console.error('Error:', e.message);
  }
}

check();