import React, { useState } from 'react';
import styles from './css.module.css';

export default function Test(props) {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <h1 className={styles.heading1}>Heading 1</h1>
        <p className={styles.typo}>
          For our example, I’ve decided to go with a default body copy size of 18px, which is large
          but not too large, and a leading ratio of 1.333 (or, equivalent to a perfect fourth). This
          yields a line height of 23.994, which I’m going to round up to an even 24px. It’s a good
          idea at this point to make modify the original artboard to show the typefaces, sizes, and
          leading you’ve chosen. Don’t worry about spacing just yet.
        </p>
        <p className={styles.typo}>
          For our example, I’ve decided to go with a default body copy size of 18px, which is large
          but not too large, and a leading ratio of 1.333 (or, equivalent to a perfect fourth). This
          yields a line height of 23.994, which I’m going to round up to an even 24px. It’s a good
          idea at this point to make modify the original artboard to show the typefaces, sizes, and
          leading you’ve chosen. Don’t worry about spacing just yet.
        </p>
      </div>
    </div>
  );
}
