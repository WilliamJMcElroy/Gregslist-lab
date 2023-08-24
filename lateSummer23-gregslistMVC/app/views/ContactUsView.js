export const ContactUsView = /*html*/`

    <form class="row g-3">
        <div class="col-md-6">
            <label for="Name" class="form-label">Name?</label>
            <input type="text" class="form-control" id="name">
        </div>
        <div class="col-md-6">
            <label for="year" class="form-label">Year House was Made</label>
            <input type="text" class="form-control" id="year">
        </div>
        <div class="col-12">
            <label for="address" class="form-label">Address</label>
            <input type="text" class="form-control" id="Address" placeholder="1234 Main St">
        </div>
        <div class="col-12">
            <label for="bedrooms" class="form-label"></label>Number of Bedrooms
            <input type="text" class="form-control" id="bedrooms" placeholder="2, 2.5, 3, 3.5...">
        </div>
        <div class="col-md-6">
            <label for="bathrooms" class="form-label">Number of Bathrooms</label>
            <input type="text" class="form-control" id="bathrooms">
        </div>
        <div class="col-md-4">
            <label for="sqft" class="form-label">Sq. footage</label>
            <input type="text" id="sqft" class="form-select">
            </input>
        </div>
        <div class="col-md-2">
            <label for="price" class="form-label">price</label>
            <input type="text" class="form-control" id="price">
        </div>
        <div class="col-12">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck">
                    <label class="form-check-label" for="gridCheck">
                        Check me out
                    </label>
            </div>
        </div>
        <div class="col-12">
            <button type="submit" class="btn btn-primary">Sign in</button>
        </div>`