---
slug: "/monte-carlo"
date: "March 24, 2021"
title: "Monte Carlo Recursive Ray Tracer"
description: "A Monte-Carlo recursive ray tracer of the Classic Cornell box."
length: "5"
---

<img alt="Mockup of two phone screens showcasing donations next to Google logo in the center." src="../images/headers/monte-carlo.png"/>
<br />

## At-a-glance

The Monte Carlo method is a way to render images of 3D scenes to have realistic global illumination. Global illumination refers to when light bounced from other objects are also used to illuminate the scene. For CS148: Introduction to Computer Graphics, my partner and I rendered a variant of the classic Cornell Box Scene This demo renders a variant of the classic Cornell Box scene, implementing area lights, sampling, and global illumination. 

<div class="row">
    <div class="col-sm">
      <h3>Role</h3>
      <p>Developer</p>
    </div>
    <div class="col-sm">
      <h3>Tools used</h3>
      <p>Blender<br/>Python<br/></p>
    </div>
    <div class="col-sm">
      <h3>Team</h3>
      <p>Vivian Xiao</p>
    </div>
    <div class="col-sm">
      <h3>Timeline</h3>
      <p>1 week, October 2021</p>
    </div>
</div>

---

## Project Overview

Building off of our [Blinn-Phong simple recursive ray tracer](blinn-phong), Vivian and I implemented a Monte-Carlo recursive ray tracer using indirect diffuse lighting in stages. Using low-discrepancy sequencing and simple sampling, we gave our image the effect of “filling in gaps” so that a given area can be covered more evenly and quickly compared to the completely randomized approach. 

While I can't disclose the details of my project implementation due to Stanford's Honor Code, feel free to [contact me](mailto:amyflo@stanford.edu) if you would like to learn more.

### Demo

<img style="width: 100%" alt="otter dancing with a fish"
src="https://lh3.googleusercontent.com/pw/AM-JKLXIn8a2mL7eHWE1KedWchwK4FiThKSWHVk3uAFlXOVDAN9UmOn7bm4vFZX2MQCR2twXNwcBQJXG_k89nQcQMX68-wZ3yOCsLF8Rt6ACybvWmRgZzkFeLVFJ_2Hko8pmZiygIG_a-o0i8nnrEtDsMO2N=w1440-h810-no">