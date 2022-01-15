class DosesController < ApplicationController
  before_action :set_dose, only: [:show, :update, :destroy]

  # GET /doses
  def index
    doses = Dose.all

    render json: doses
  end

  # GET /doses/1
  def show
    render json: @dose
  end

  # POST /doses
  def create
    
    @dose = Dose.new(dose_params)

    if @dose.save
      render json: @dose, status: :created, location: @dose
    else
      render json: @dose.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /doses/1
  def update
    if @dose.update(dose_params)
      render json: @dose
    else
      render json: @dose.errors, status: :unprocessable_entity
    end
  end

  # DELETE /doses/1
  def destroy
    @dose.destroy
    render json: {message: 'Dose successfully deleted!'}
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_dose
      @dose = Dose.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def dose_params
      params.require(:dose).permit(:amount, :cocktail_id, :ingredient_id)
    end
end
