/**
 * Renders the personal information step of a multi-step form.
 * This function generates an HTML template for the first step of the form,
 * allowing users to input their personal details such as name, email, and phone number.
 * @param {typeof import('./state').state.data} state - The current state of the form, containing user data.
 * @returns {string} An HTML string representing the personal information step.
 */
export const personalTemplate = (state) => `
  <div class="step">
    <h2 class="step-title">Step 1: Your personal information</h2>
    <p class="step-description">By providing your personal information, you help us create a better experience for you.</p>
    <section class="controllers">
      <div class="group-controller">
        <label for="name">Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value="${state.data.name}" 
          placeholder="e.g John Doe"
          autoComplete="name"
        />
      </div>
      <div class="group-controller">
        <label for="email">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value="${state.data.email}" 
          placeholder="e.g john.doe@example.com"
          autoComplete="off"
        />
      </div>
      <div class="group-controller">
        <label for="phone">Phone</label>
        <input 
          type="tel" 
          id="phone" 
          name="phone" 
          value="${state.data.phone}" 
          placeholder="e.g +1234567890"
          autoComplete="tel"
        />
      </div>
      <div class="group-btns">
        <button type="button" class="next">Next</button>
      </div>
    </section>
  </div>
`

/**
 * Renders the location step of a multi-step form.
 * This function generates an HTML template for the second step of the form,
 * allowing users to input their location details such as city, country, and zip code.
 * @param {typeof import('./state').state.data} state - The current state of the form, containing user data.
 * @returns {string} An HTML string representing the location step.
 */
export const locationTemplate = (state) => `
  <div class="step">
    <h2 class="step-title">Step 2: Provide your location</h2>
    <p class="step-description">By providing your location information, you help us create a better experience for you. This information allows us to personalize our services, provide location-specific features, and ensure accurate delivery of any products or services you may request.</p>
    <section class="controllers">
      <div class="group-controller">
        <label for="city">City</label>
        <input 
          type="text" 
          id="city" 
          name="city" 
          value="${state.data.city}" 
          placeholder="e.g New York"
          autoComplete="location"
        />
      </div>
      <div class="group-controller">
        <label for="country">Country</label>
        <input 
          type="text" 
          id="country" 
          name="country" 
          value="${state.data.country}" 
          placeholder="e.g USA"
          autoComplete="location"
        />
      </div>
      <div class="group-controller">
        <label for="zip">Zip Code</label>
        <input type="tel" id="zip" name="zip" value="${state.data.zip}" placeholder="e.g 10001" />
      </div>
      <div class="group-btns">
        <button type="button" class="prev">Previous</button>
        <button type="button" class="next">Next</button>
      </div>
    </section>
  </div>
`

/**
 * Renders the summary step of a multi-step form.
 * This function generates an HTML template for the third step of the form,
 * allowing users to review their information before submission.
 * @param {typeof import('./state').state.data} state - The current state of the form, containing user data.
 * @returns {string} An HTML string representing the summary step.
 */
export const summaryTemplate = (state) => `
  <div class="step">
    <h2 class="step-title">Step 3: Check your information</h2>
    <p class="step-description">Please review the information you provided in the previous steps. Ensure that all details are correct before proceeding to the next step.</p>
    <section class="review">
      <h3 class="review-title">Personal Information</h3>
      <div class="review-container">
        <div class="review-item">
          <h4 class="review-subtitle">Name</h4>
          <p class="review-description">${state.data.name}</p>
        </div>
        <div class="review-item">
          <h4 class="review-subtitle">Email</h4>
          <p class="review-description">${state.data.email}</p>
        </div>
        <div class="review-item">
          <h4 class="review-subtitle">Phone</h4>
          <p class="review-description">${state.data.phone}</p>
        </div>
      </div>
      <h3 class="review-title">Address</h3>
      <div class="review-container">
        <div class="review-item">
          <h4 class="review-subtitle">Country</h4>
          <p class="review-description">${state.data.country}</p>
        </div>
        <div class="review-item">
          <h4 class="review-subtitle">City</h4>
          <p class="review-description">${state.data.city}</p>
        </div>
        <div class="review-item">
          <h4 class="review-subtitle">Zip Code</h4>
          <p class="review-description">${state.data.zip}</p>
        </div>
      </div>
      <div class="group-btns">
        <button type="button" class="prev">Previous</button>
        <button type="submit" class="send">Send</button>
      </div>
    </section>
  </div>
`