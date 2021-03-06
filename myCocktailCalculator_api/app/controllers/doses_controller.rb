class DosesController < ApplicationController
  before_action :set_dose, only: [:show, :update, :destroy]

  # GET /doses
  def index
    doses = Dose.all

    render json: doses, include: [:cocktail, :ingredient], except: [:updated_at]
  end

  # GET /doses/1
  def show
    dose = Dose.find(params[:id])
    render json: { id: dose.id, quantity: dose.quantity , cocktail: dose.cocktail.name, ingredient: dose.ingredient.name }
  end

  # POST /doses
  def create
    # binding.pry
    dose = Dose.new(dose_params)
    if (params[:ingredient_name] != "")
      ingredient = Ingredient.create(name: params[:ingredient_name], liquid: params[:liquid])
      dose.ingredient_id = ingredient.id
    end
    
    if dose.save
      render json: dose, include: [:cocktail, :ingredient], except: [:updated_at], status: :created, location: dose
    else
      render json: dose.errors, status: :unprocessable_entity
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
      params.require(:dose).permit(:quantity, :cocktail_id, :ingredient_id)
    end
end
