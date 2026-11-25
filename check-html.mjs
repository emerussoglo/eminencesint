async function check() {
  try {
    const res = await fetch('http://localhost:3000');
    const html = await res.text();

    // Find catalog-grid section
    const idx = html.indexOf('class="catalog-grid"');
    if (idx >= 0) {
      const section = html.substring(idx, idx + 5000);
      console.log('=== CATALOG GRID ===');
      console.log(section);
    }

    // Find timeline-grid
    const idx2 = html.indexOf('class="timeline-grid"');
    if (idx2 >= 0) {
      const section2 = html.substring(idx2, idx2 + 3000);
      console.log('\n=== TIMELINE GRID ===');
      console.log(section2);
    }

    // Find poles-grid
    const idx3 = html.indexOf('class="poles-grid"');
    if (idx3 >= 0) {
      const section3 = html.substring(idx3, idx3 + 3000);
      console.log('\n=== POLES GRID ===');
      console.log(section3);
    }

    // Find about-grid
    const idx4 = html.indexOf('class="about-grid"');
    if (idx4 >= 0) {
      const section4 = html.substring(idx4, idx4 + 3000);
      console.log('\n=== ABOUT GRID ===');
      console.log(section4);
    }

    // Find two-col-cards
    const idx5 = html.indexOf('class="two-col-cards"');
    if (idx5 >= 0) {
      const section5 = html.substring(idx5, idx5 + 2000);
      console.log('\n=== TWO COL CARDS ===');
      console.log(section5);
    }

    // Check footer
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