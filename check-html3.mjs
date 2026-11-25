async function check() {
  try {
    const res = await fetch('http://localhost:3000/a-propos');
    const html = await res.text();

    // Find about-grid
    const idx4 = html.indexOf('class="about-grid"');
    if (idx4 >= 0) {
      const section4 = html.substring(idx4, idx4 + 3000);
      console.log('\n=== ABOUT GRID ===');
      console.log(section4);
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